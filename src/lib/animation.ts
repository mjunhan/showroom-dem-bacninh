
export const SPRING_TRANSITION = {
    type: "spring",
    stiffness: 400, // Độ cứng lò xo (càng cao càng nảy nhanh)
    damping: 30,    // Độ cản (càng cao càng ít rung lắc)
    mass: 1
};

export const HOVER_SCALE = {
    scale: 1.02, // Chỉ phóng to 2%, đừng phóng to quá nhiều nhìn bị ảo
    y: -4        // Nhấc lên nhẹ nhàng
};
