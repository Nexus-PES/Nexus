"use client";

// import { Menu, Transition } from "@headlessui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { BsThreeDotsVertical } from "react-icons/bs";

import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfToday,
} from "date-fns";
import { useState } from "react";
import Image from "next/image";

const meetings = [
	{
		id: 1,
		name: "Leslie Alexander",
		imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2022-05-11T13:00",
		endDatetime: "2022-05-11T14:30",
	},
	{
		id: 2,
		name: "Michael Foster",
		imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-05-20T09:00",
		endDatetime: "2023-05-20T11:30",
	},
	{
		id: 3,
		name: "Dries Vincent",
		imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-05-20T17:00",
		endDatetime: "2023-05-20T18:30",
	},
	{
		id: 4,
		name: "Leslie Alexander",
		imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-06-09T13:00",
		endDatetime: "2023-06-09T14:30",
	},
	{
		id: 5,
		name: "Michael Foster",
		imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-05-13T14:00",
		endDatetime: "2023-05-13T14:30",
	},
	{
		id: 6,
		name: "Michael Foster",
		imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-10-13T14:00",
		endDatetime: "2023-10-13T14:30",
		addToCalendar: "www.google.com",
        calendarMessage: "Register",
	},
	{
		id: 7,
		name: "Michael Foster",
		// imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-10-11T14:00",
		endDatetime: "2023-10-11T14:30",
        addToCalendar: "www.google.com",
	},
	{
		id: 8,
		name: "Recruitment",
		// imageUrl: "/images/events/unsplash_-HIiNFXcbtQ.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vulputate enim nulla aliquet porttitor. Dictum fusce ut placerat orci nulla pellentesque dignissim. Id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas maecenas. Arcu ac tortor dignissim convallis aenean. Suspendisse interdum consectetur libero id faucibus. Duis ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu lobortis elementum nibh tellus molestie nunc non. Proin fermentum leo vel orci porta non pulvinar. Tincidunt id aliquet risus feugiat in ante. Purus in massa tempor nec feugiat nisl pretium fusce. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nam at lectus urna duis. Condimentum vitae sapien pellentesque habitant. Malesuada fames ac turpis egestas maecenas. Iaculis eu non diam phasellus vestibulum lorem sed. Vulputate sapien nec sagittis aliquam.",
		startDatetime: "2023-10-20T14:00",
		// endDatetime: "2023-10-20T14:30",
        addToCalendar: "www.google.com",
        calendarMessage: "Register",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
	let today = startOfToday();
	let [selectedDay, setSelectedDay] = useState(today);
	let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
	let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

	let days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	});

	function previousMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
	}

	function nextMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
	}

	let selectedDayMeetings = meetings.filter((meeting) =>
		isSameDay(parseISO(meeting.startDatetime), selectedDay)
	);

	return (
		<div className="pt-16">
			<h1 className="font-semibold text-2xl md:text-3xl mb-4  mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Schedule
				</span>
			</h1>
			{/* <div className="max-w-md px-0 mt-8 mx-auto sm:px-4 md:max-w-4xl md:px-2"> */}
			<div className="max-w-md px-0 mt-8 mx-2 sm:mx-auto md:max-w-4xl lg:max-w-6xl">
				{/* <div className="md:grid md:grid-cols-2 lg:grid-cols-3 divide-slate-800 md:divide-x-2 "> */}
				<div className="flex flex-col md:flex-row divide-slate-800/50 md:divide-x-2 ">
					<div className="md:pr-4 min-w-[350px] md:min-w-[300px] lg:min-w-[400px]">
						<div className="flex items-center">
							<h2 className="flex-auto font-semibold text-white">
								{format(firstDayCurrentMonth, "MMMM yyyy")}
							</h2>
							<button
								type="button"
								onClick={previousMonth}
								className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 hover:bg-gray-900 rounded text-xs font-medium tracking-wider"
							>
								<span className="sr-only">Previous month</span>
								<BiChevronLeft
									className="w-5 h-5"
									aria-hidden="true"
								/>
							</button>
							<button
								onClick={nextMonth}
								type="button"
								className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 hover:bg-gray-900 rounded text-xs font-medium tracking-wider"
							>
								<span className="sr-only">Next month</span>

								<BiChevronRight
									className="w-5 h-5"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-text-primary">
							<div>S</div>
							<div>M</div>
							<div>T</div>
							<div>W</div>
							<div>T</div>
							<div>F</div>
							<div>S</div>
						</div>
						<div className="grid grid-cols-7 mt-2 text-sm">
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									className={classNames(
										dayIdx === 0 &&
											colStartClasses[getDay(day)],
										"py-1.5"
									)}
								>
									<button
										type="button"
										onClick={() => setSelectedDay(day)}
										className={classNames(
											isEqual(day, selectedDay) &&
												"text-slate-100",
											!isEqual(day, selectedDay) &&
												isToday(day) &&
												"text-primary",
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												isSameMonth(
													day,
													firstDayCurrentMonth
												) &&
												"text-white",
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												!isSameMonth(
													day,
													firstDayCurrentMonth
												) &&
												"text-slate-600",
											isEqual(day, selectedDay) &&
												isToday(day) &&
												"bg-secondary",
											isEqual(day, selectedDay) &&
												!isToday(day) &&
												// "bg-slate-700",
												"bg-slate-700",
											!isEqual(day, selectedDay) &&
												"hover:bg-gray-500",
											(isEqual(day, selectedDay) ||
												isToday(day)) &&
												"font-semibold",
											"mx-auto flex h-8 w-8 items-center justify-center rounded-full"
										)}
									>
										<time
											dateTime={format(day, "yyyy-MM-dd")}
										>
											{format(day, "d")}
										</time>
									</button>

									<div className="w-1 h-1 mx-auto mt-1">
										{meetings.some((meeting) =>
											isSameDay(
												parseISO(meeting.startDatetime),
												day
											)
										) && (
											<div className="w-1 h-1 rounded-full bg-secondary"></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<section className="mt-12 md:mt-0 md:pl-4 md:flex-grow">
						<h2 className="font-semibold text-white">
							Schedule for{" "}
							<time dateTime={format(selectedDay, "yyyy-MM-dd")}>
								{format(selectedDay, "MMM dd, yyy")}
							</time>
						</h2>
						<ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
							{selectedDayMeetings.length > 0 ? (
								selectedDayMeetings.map((day) => (
									<Selection
										day={day}
										key={day.id}
									/>
								))
							) : (
								<p className="mx-2">Nothing scheduled</p>
							)}
						</ol>
					</section>
				</div>
			</div>
		</div>
	);
}

function Selection({ day }) {
	let startDateTime = parseISO(day.startDatetime);
	let endDateTime = parseISO(day.endDatetime);

	return (
		<li className="flex flex-col py-2 mx-2 space-x-4 group rounded-xl text-text-primary">
			<div className="flex-auto flex flex-col gap-y-2">
				<h2 className="text-secondary font-semibold text-lg mb-2">
					{day.name}
				</h2>
				{day?.imageUrl && (
					<Image
						src={day.imageUrl}
						alt={day.name}
						width={800}
						height={400}
						className="object-cover w-full h-40 rounded my-2"
					/>
				)}
				<p className="text-xs leading-5 md:line-clamp-6">
					{day.description}
				</p>
				<div className="flex gap-x-2">
					<p className="mt-0.5 text-sm border border-slate-600 bg-shaded rounded p-2 self-start">
						{day?.startDatetime && (
							<>
								<time dateTime={day.startDatetime}>
									{format(startDateTime, "h:mm a")}
								</time>{" "}
							</>
						)}

						{day?.endDatetime && (
							<>
								-{" "}
								<time dateTime={day.endDatetime}>
									{format(endDateTime, "h:mm a")}
								</time>
							</>
						)}
					</p>
					{day?.addToCalendar && (
						<a
							href={day.addToCalendar}
							className="inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 bg-secondary text-white hover:bg-primary h-9 px-4"
						>
							{day.calendarMessage ? day.calendarMessage : "Add to Calendar"}
						</a>
					)}
				</div>
			</div>
			{/* {JSON.stringify(meeting)} */}

			{/* <img
				src={meeting.imageUrl}
				alt=""
				className="flex-none w-10 h-10 rounded-full"
			/>
			<Menu
				as="div"
				className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
			>
				<div>
					<Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
						<span className="sr-only">Open options</span>
						<BsThreeDotsVertical
							className="w-6 h-6"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active
												? "bg-gray-100 text-gray-900"
												: "text-gray-700",
											"block px-4 py-2 text-sm"
										)}
									>
										Edit
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active
												? "bg-gray-100 text-gray-900"
												: "text-gray-700",
											"block px-4 py-2 text-sm"
										)}
									>
										Cancel
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu> */}
		</li>
	);
}

let colStartClasses = [
	"",
	"col-start-2",
	"col-start-3",
	"col-start-4",
	"col-start-5",
	"col-start-6",
	"col-start-7",
];
