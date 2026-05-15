export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} FUYAOYAO. All rights reserved.
        </p>
      </div>
    </footer>
  )
}