import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
	return (
		<nav>
			<div className="">
				<Link href="#home" className="flex items-center gap-2">
					<Image src={"/images/logo.webp"} alt="logo" width={28} height={28} />
					<p>Velvet Pour</p>
				</Link>
				<ul>
					{navLinks.map(({ id, title }) => (
						<li key={id}>
							<Link href={`#${id}`}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
