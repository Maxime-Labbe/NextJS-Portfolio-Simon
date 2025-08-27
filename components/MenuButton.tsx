export default function MenuButton({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="absolute w-8 top-14 right-6 z-50">
      <div className={`w-8 h-1 bg-black mb-1.5 rounded-lg`} />
      <div
        className={`h-1 bg-black mb-1.5 rounded-lg transition-all duration-300 ease-in-out ${
          isOpen ? "w-6 ml-2" : "w-8"
        }`}
      />
      <div
        className={`h-1 bg-black rounded-lg  transition-all duration-300 ease-in-out ${
          isOpen ? "w-3 ml-5" : "w-8"
        }`}
      />
    </div>
  );
}
