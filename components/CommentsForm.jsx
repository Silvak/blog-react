import React, {useRef ,useState, useEffect} from 'react'
import { submitComment } from '../services';


const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStoreage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  
  useEffect(()=>{
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission= () =>{
    setError(false);

    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;
    const {checked: storeData} = storeDataEl.current;

    if(!comment || !name || !email){
      setError(true);
      return
    }

    const commentObj = { name, email, comment, slug }
  
    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res)=>{
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })
  }


  return (
    <div className='bg-white border px-8 pt-8 pb-4 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a Comment</h3>
        <div className='grid grid-cols-1 gap-4 mb-4'> 
          <textarea 
            ref={commentEl} 
            className="p-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder='Comment'
            name='comment'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'> 
          <input 
             type="text" 
             ref={nameEl}
             className="p-2 px-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
             placeholder='Name'
              name='name'
          />
          <input 
              type="text" 
              ref={emailEl}
              className="p-2 px-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              placeholder='Email'
              name='email'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'> 
          <div>
            <input
              ref={storeDataEl}
              type="checkbox"
              id='storeData'
              name="storeData"
              value="true"
            />
            <label htmlFor="storeData" className='ml-2 text-gray-500 cursor-pointer'>Remember me</label>
          </div>
        </div>
        {error && <p className='text-xs text-red-500'>All fields are required.</p>}

        <div className='flex justify-center'>
            <div 
              className='transition before:duration-200  transform relative before:absolute  
              hover:before:translate-y-1 hover:before:-translate-x-1 before:w-full before:h-full before:bg-[#10162f]'
            >
                <button  
                  onClick={handleCommentSubmission}
                  className='cursor-pointer transition duration-200 transform hover:-translate-y-1 hover:translate-x-1 
                  inline-block bg-[#3b10e3]  text-lg font-medium  border border-[#10162f]  text-white px-4 py-3 z-20'
                >
                  Continuos Reading
                  </button>
            </div>
        </div>
        <div className='w-full h-6 flex mt-2'>
        {showSuccessMessage && <span className='m-auto font-semibold text-sm text-green-500'>Comment submitted for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm