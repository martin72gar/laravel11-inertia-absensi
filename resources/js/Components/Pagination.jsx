import { Link } from "@inertiajs/react"

export default function Pagination({ links }) {
    return (
        <div className="flex mt-8 space-x-2">
            {
                links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.url}
                            className={
                                link.active 
                                    ? "bg-red-600 text-white px-4 py-2 border border-red-600 rounded-md"
                                    : "text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 border rounded-md"
                                }
                            dangerouslySetInnerHTML={{ __html: link.label}}
                        />
                    )
                )
            }
        </div>
    )
   
}