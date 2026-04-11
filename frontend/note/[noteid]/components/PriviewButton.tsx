'use client '

const PriviewButton = ({fileLink} :{fileLink:string}) => {
    const  handlePreview =()=>{
        window.open(fileLink,"_balnk")
    }
  return (
    <div>
      <button>
        <a  onClick={handlePreview} href="#" className="text-xs text-gray-500 uppercase">Preview</a> 
        </button>
    </div>
        
  )
}

export default PriviewButton
