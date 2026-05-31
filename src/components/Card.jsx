function Card({ title = "", description = "", source = "", time = "", url = "" }) {
    return (

        <div className="flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition duration-200 overflow-hidden">
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-3">
                    {title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-4">
                    {description}
                </p>
                <ul className="flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-100 pt-4 mt-auto">
                    <li>
                        <a href={`${url}`} title={`${title}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-150">
                            {source}
                        </a>
                    </li>
                    <li>{time}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;