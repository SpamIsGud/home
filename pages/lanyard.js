import { useLanyard } from "use-lanyard";

export default function Activity() {
	const { data: activity } = useLanyard("371074018318614528");

	return (
		<pre>
			<code>{JSON.stringify(activity, null, 2)}</code>
		</pre>
	);
}
