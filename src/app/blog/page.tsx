import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { POSTS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Tin Tức & Kinh Nghiệm</h1>
                        <p className="text-slate-600 text-lg">
                            Chia sẻ những bí quyết chọn mua và bảo quản chăn ga gối đệm để bạn luôn có giấc ngủ ngon nhất.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {POSTS.map((blog) => (
                            <article key={blog.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 group shadow-sm hover:shadow-xl transition-all duration-500">
                                <Link href={`/blog/${blog.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </Link>
                                <div className="p-8">
                                    <div className="flex items-center space-x-2 text-slate-400 text-sm mb-4 font-medium">
                                        <Calendar size={16} />
                                        <span>{blog.date}</span>
                                    </div>
                                    <Link href={`/blog/${blog.slug}`}>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                            {blog.title}
                                        </h2>
                                    </Link>
                                    <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${blog.slug}`}
                                        className="inline-flex items-center space-x-2 text-primary font-bold hover:translate-x-1 transition-transform"
                                    >
                                        <span>Đọc thêm</span>
                                        <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
