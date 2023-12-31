import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi';

function Uploder() {
    const {getRootProps, getInputProps}=useDropzone({
        multiple:false,
        maxSize:100000,
        onDrop:(acceptedFiles)=>{
            alert(acceptedFiles[0].name);
        },
    });
  return (
    <div className="w-full text-center">
        <div
    {...getRootProps()}
    className='px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer'>
      <input {...getInputProps()}></input>
      <span className='mx-auto flex-colo text-subMain text-3xl'>
        <FiUploadCloud></FiUploadCloud>
      </span>
      <p className='text-sm mt-2'>Arrastra tu imagen aquí</p>
      <em className='text-xs text-border'>
        (Solo se aceptan archivos con formato .jpg y .png)
      </em>
    </div>
    </div>
  )
}

export default Uploder
