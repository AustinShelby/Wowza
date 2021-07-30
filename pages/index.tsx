export default function Home(props: any) {
  return <div>{props.locale}</div>;
}

export const getStaticProps = async (props: any) => {
  return { props: { locale: props.locale } };
};
