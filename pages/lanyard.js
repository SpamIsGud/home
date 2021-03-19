import { useLanyard } from "use-lanyard";

export default function Activity() {
	const { data: activity } = useLanyard("164549319658176512");

	return (
		<pre>
			<code>{JSON.stringify(activity, null, 2)}</code>
		</pre>
	);
}
