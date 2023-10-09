import SubHero from "../../components/SubHero";

const RegistrationPage = () => {
	const isRecruitmentsOpen = true;

	if (isRecruitmentsOpen) {
		return (
			<main className="mt-16 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center">
				<div className="flex max-w-screen-xl flex-col gap-16">
					<SubHero
						title="Recruitment"
						subtitle="Unlock Your Potential with Us! Join Our Team for a Rewarding Career Journey."
					>
						You are just one step away from becoming one of us
					</SubHero>
				</div>
			</main>
		);
	} else {
		return <div>RegistrationPage Closed</div>;
	}
};

export default RegistrationPage;
