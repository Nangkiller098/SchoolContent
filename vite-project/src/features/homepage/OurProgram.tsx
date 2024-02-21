import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const OurProgram = () => {
  return (
    <>
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">Our Program</a>
        </h1>
      </div>

      <div className="lg:flex justify-center text-center gap-10 p-4">
        <>
          <Card placeholder="" className="lg:max-w-[24rem] overflow-hidden">
            <CardHeader
              placeholder=""
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody placeholder="">
              <Typography placeholder="" variant="h4" color="blue-gray">
                Khmer
              </Typography>
            </CardBody>
            <CardFooter placeholder="" className="pt-0">
              <Button placeholder="" className=" bg-green-600">
                Read More
              </Button>
            </CardFooter>
          </Card>
        </>
        <>
          {" "}
          <Card placeholder="" className="lg:max-w-[24rem] overflow-hidden">
            <CardHeader
              placeholder=""
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody placeholder="">
              <Typography placeholder="" variant="h4" color="blue-gray">
                English
              </Typography>
            </CardBody>
            <CardFooter placeholder="" className="pt-0">
              <Button placeholder="" className=" bg-green-600">
                Read More
              </Button>
            </CardFooter>
          </Card>
        </>
        <>
          {" "}
          <Card placeholder="" className="lg:max-w-[24rem] overflow-hidden">
            <CardHeader
              placeholder=""
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody placeholder="">
              <Typography placeholder="" variant="h4" color="blue-gray">
                Japanese
              </Typography>
            </CardBody>
            <CardFooter placeholder="" className="pt-0">
              <Button placeholder="" className=" bg-green-600">
                Read More
              </Button>
            </CardFooter>
          </Card>
        </>
      </div>
    </>
  );
};

export default OurProgram;
