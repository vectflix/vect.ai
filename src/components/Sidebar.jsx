export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-y-0 right-0 w-64 glass z-[100] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform p-6`}>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-white font-black italic">SETTINGS</h3>
        <button onClick={onClose} className="text-white"><i className="fas fa-times"></i></button>
      </div>
      <p className="text-[10px] text-gray-400">VECT ENGINE v4.2</p>
    </div>
  );
}
