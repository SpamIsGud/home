import { useLanyard } from "use-lanyard";

export default function Activity() {
	const { data: activity } = useLanyard("524371131134902282");

	return (
		<pre>
			<code>{JSON.stringify(activity, null, 2)}</code>
		</pre>
	);
}
