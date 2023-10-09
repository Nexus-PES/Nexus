import { cn } from "../lib/utils";

const Form = ({children, className}) => {
	return <div className={cn('bg-orange-500', className) }>
	<p>{children}</p>
	<div className="">
		<label name="name" htmlFor="name">
			<span>First Name</span>
			<input type="text" id="name"/>
		</label>
	</div>
	</div>;
};

export default Form;

export function WebDevForm() {
	return <div>WebDevForm</div>;
}
