import "./footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="redes">
                <p>© 2025 | Hauz Studio 3D</p>
            </div>
            <div className="ctt">
                <a href="https://www.instagram.com/hauzstudio3d" target="_blank"><img src="/Instagram.png" /></a>
                <a href="mailto:comercial@hauzstudio3d.com" target="_blank"><img src="/mail.png" /></a>
                <a href="https://api.whatsapp.com/send?phone=5581979117827" target="_blank"><img src="/zap.png" /></a>
            </div>
        </div>
    )
}