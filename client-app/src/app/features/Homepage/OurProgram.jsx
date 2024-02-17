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
    <div className="lg:grid grid-cols-3  w-full h-full ">
      <div className="...">
        <Card className=" w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Button className=" bg-green-600">Read More</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="...">
        {" "}
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Button className=" bg-green-600">Read More</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="...">
        {" "}
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Button className=" bg-green-600">Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurProgram;
