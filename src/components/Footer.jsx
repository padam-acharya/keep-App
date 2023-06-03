
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <small>Copyright {year} &copy; All rights reserved.</small>
        </footer>
    )
}