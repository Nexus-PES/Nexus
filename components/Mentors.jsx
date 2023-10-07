import Image from "next/image";
import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";

const memberData = [
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile3.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
		domain: "Web Development",
		socialLinks: [
			{
				type: "linkedin",
				url: "https://www.linkedin.com/in/firstname-lastname",
			},
			{
				type: "github",
				url: "www.github.com/firstname-lastname",
			},
		],
	},
];

const Mentors = () => {
	return (
		<>
			<h1 className="font-semibold text-2xl md:text-3xl mb-4  mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Mentors
				</span>
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
				{memberData.map((member, i) => (
					<ProfilePicture
						key={i} {...member}
/>
				))}
			</div>
		</>
	);
};

export default Mentors;

const ProfilePicture = ({ domain, name, role, socialLinks, imageUrl }) => {
	return (
		<div className="p-1 flex flex-col justify-center">
			<h2 className="text-white">{domain}</h2>
			<Image
				height={268}
				width={268}
				alt={`${name}-${role}`}
				src={imageUrl}
				className="rounded-lg w-full object-cover h-80"
			/>
			<BiLogoLinkedin />
			<div className="px-2 my-2 ">
				<div className="text-xs font-medium flex flex-row drop-shadow-lg">
					{name}
				</div>
				<div className="text-xxs md:text-[0.6rem] text-secondary flex flex-row-reverse">
					{role}
				</div>
			</div>
		</div>
	);
};
