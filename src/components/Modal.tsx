interface ModalProps {  
  isOpen: boolean;  
  onClose: () => void;  
  title: string;  
  message: string;  
}  

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {  
  if (!isOpen) return null;  

  return (  
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
      <div className="p-6 bg-pink-50 rounded-lg shadow-lg">  
        <h4 className="mb-4 text-lg font-bold text-pink-800">{title}</h4>  
        <p className="mb-4 text-gray-700">{message}</p>  
        <div className="flex justify-center space-x-4">  
          <button  
            className="px-4 py-2 text-white bg-pink-600 rounded hover:bg-pink-700"  
            onClick={onClose}  
          >  
            Ok  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Modal;