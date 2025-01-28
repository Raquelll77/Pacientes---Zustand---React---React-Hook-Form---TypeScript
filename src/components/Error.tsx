export default function Error({children} : { children: React.ReactNode}) {
  return (
    <p className="text-center my-4 bg-red-200 text-red-700 font-bold p-3 uppercase text-sm border-l-4 border-red-700">{children}</p>
  )
}
