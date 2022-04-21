import React from 'react'
import moment from 'moment'
import Image from 'next/image'

const PostDetail = ({post}) => {

  const getContentFragment = (index, text, obj, type)=>{
    let modifiedText = text;

    if(obj) {
      if (obj.bold){
        modifiedText = (<b key={index}>{text}</b>);
      }
      if (obj.italic){
        modifiedText = (<em key={index}>{text}</em>);
      }
      if (obj.underline){
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }

  return (
    <div className='bg-white border lg:p-8 pb-12 mb-8'>

        <div className='relative overflow-hidden h-[55vh] shadow-md mb-6'>
          <Image
            layout="fill"
            src={post.featuredImage.url}
            alt={post.title}
            className="object-cover h-full w-full"
          />
        </div>

        <div className='px-4 lg:px-0'>
          <div className='flex items-center mb-6 w-full'>
            <div className='flex items-center lg:mb-0 w-full lg:w-auto text-center lg:mr-6'>
              <Image
                alt={post.author.name}
                height="30px"
                width="30px"
                className='align-middle'
                src={post.author.photo.url}
              />
              <p className='inline bg-[#10162f] text-white  px-3 align-middle  text-lg'>{post.author.name}</p>
            </div>

            <div className='font-medium text-right text-gray-7 00 w-full lg:w-auto'>
              <svg className='h-6 w-6 inline mr-2' viewBox="0 0 20 20">
						  	<path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"></path>
						  </svg>
              <span className=''>
                {moment(post.createdAt).format('DD MMM, YYYY')}
              </span>
            </div>
          </div>

          <h1 className='mb-8 text-3xl font-semibold'>
            {post.title}
          </h1>
          {post.content.raw.children.map((typeObj, index)=>{
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
        </div>
    </div>
  )
}

export default PostDetail