export default function Card({ children }) {
    return (
        <div className= "bg-white/80 backdrop-blur rounded-2xl shadow-md p-4 md:p-6 flex flex col gap-4 w-full"
        >
            {children}
        </div>
    )
}