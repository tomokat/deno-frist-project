import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Greeting from deployed Hello {props.params.name}</div>;
}
