import { getPosts } from "@/lib/sanity";
import { BlogCard } from "@/components/features/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tin tức & Cẩm nang | Showroom Đệm Bắc Ninh",
    description: "Cập nhật những tin tức mới nhất về sản phẩm đệm, chăn ga và cẩm nang chăm sóc giấc ngủ ngon.",
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen pt-24 md:pt-32 pb-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Card */}
                <div className="bg-white rounded-lg p-12 md:p-16 border border-primary/5 shadow-sm text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-playfair tracking-tight">
                        Tin tức & <span className="text-primary italic">Cẩm nang</span>
                    </h1>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8 opacity-50"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Khám phá những bí quyết chăm sóc giấc ngủ và cập nhật xu hướng nội thất phòng ngủ mới nhất từ các chuyên gia.
                    </p>
                </div>

                {/* Grid */}
                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-lg border border-dashed border-primary/10">
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Hiện chưa có bài viết nào</p>
                    </div>
                )}
            </div>
        </main>
    );
}
