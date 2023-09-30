import Image from "next/image";
import React from "react";

const memberData = [
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile3.png",
	},
	{
		name: "Firstname Lastname",
		role: "ROLE",
		imageUrl: "/images/member/profile2.png",
	},
];

const Mentors = () => {
	return (
		<>
			<h1 className="font-bold text-2xl font-montserrat mb-4 mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Mentors
				</span>
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
				{memberData.map((member, i) => (
					<ProfilePicture
						key={i}
						name={member.name}
						role={member.role}
						imageUrl={member.imageUrl}
					/>
				))}
			</div>
		</>
	);
};

export default Mentors;

const ProfilePicture = ({ name, role, imageUrl }) => {
	return (
		<div className="p-1 font-montserrat flex flex-col justify-center">
			<Image
				height={268}
				width={268}
				alt={`${name}-${role}`}
				src={imageUrl}
				className="rounded-lg w-full object-cover h-80"
			/>
			<div className="px-2 my-2 ">
				<div className=" text-xs font-medium flex flex-row">{name}</div>
				<div className=" text-[0.75rem] md:text-[0.6rem] text-secondary flex flex-row-reverse">
					{role}
				</div>
			</div>
		</div>
	);
};
