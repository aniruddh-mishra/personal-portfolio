function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Aniruddh Mishra. Designed & Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer
