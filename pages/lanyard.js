import { useLanyard } from "use-lanyard";

export default function Activity() {
	const { data: activity } = useLanyard("293127649537163267");

	return (
		<pre>
			<code>{JSON.stringify(activity, null, 2)}</code>
		</pre>
	);
}
