function TagButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="hover:bg-brand-primary rounded-full border-1 border-gray-100 bg-white px-4 py-2.5 text-base text-gray-800 shadow-sm hover:text-white">
      {children}
    </button>
  )
}

export default TagButton
