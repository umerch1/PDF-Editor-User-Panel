import HomeServiceComponent from "./index.service";
import HomeComponent from ".";

function Home(props: any) {
  return (
    <HomeServiceComponent {...props}>
      {(props: any) => <HomeComponent {...props} />}
    </HomeServiceComponent>
  );
}

export default Home;
