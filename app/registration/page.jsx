"use client";
import { useState } from "react";
import SubHero from "../../components/SubHero";
import Form from "../../components/Form";
import { Button } from "../../components/Button";
import { set } from "date-fns";

const RegistrationPage = () => {
	const isRecruitmentsOpen = true;
	const [page, setPage] = useState(0);
	const [userData, setUserData] = useState({});

	if (!isRecruitmentsOpen) {
		return <div>RegistrationPage Closed</div>;
	} else {

		const handleChange = (e) => {
			e.preventDefault();
			setUserData({ ...userData, [e.target.name]: e.target.value });
		}
		return (
			<main className="mt-16 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center flex-col">
				<div className="flex max-w-screen-xl flex-col gap-16">
					<SubHero
						title="Recruitment"
						subtitle="Unlock Your Potential with Us! Join Our Team for a Rewarding Career Journey."
					>
						You are just one step away from becoming one of us
					</SubHero>
				</div>
				<div className="max-w-3xl mx-auto">
					<Form handleChange={e=>handleChange(e)} className={`${page !== 0 && "hidden"} border border-red-600`} />
				</div>
				{JSON.stringify(userData)}
			</main>
		);
	}
};

export default RegistrationPage;
