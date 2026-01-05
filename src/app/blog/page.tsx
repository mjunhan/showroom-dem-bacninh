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
        <main className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Tin tức & <span className="text-primary">Cẩm nang</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Khám phá những bí quyết chăm sóc giấc ngủ và cập nhật xu hướng nội thất phòng ngủ mới nhất.
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
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                        <p className="text-slate-400">Hiện chưa có bài viết nào. Quay lại sau nhé!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
