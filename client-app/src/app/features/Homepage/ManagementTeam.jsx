import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const ManagementTeam = () => {
  return (
    <>
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">Management Team</a>
        </h1>
      </div>{" "}
      <div className="lg:flex justify-center text-center items-center gap-10 md:flex sm:w-full sm:h-full">
        <>
          <Card className="lg:w-96 md:w-96">
            <CardHeader floated={false} className="2xl:h-80">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Natalie Paisley
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </Card>
        </>
        <>
          <Card className="lg:w-96">
            <CardHeader floated={false} className="2xl:h-80">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Natalie Paisley
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </Card>
        </>
        <>
          <Card className="lg:w-96">
            <CardHeader floated={false} className="2xl:h-80">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Natalie Paisley
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                CEO / Co-Founder
              </Typography>
            </CardBody>
          </Card>
        </>
      </div>
      <div className="lg:flex justify-center text-center items-center p-4">
        <Button color="green">Show More</Button>
      </div>
    </>
  );
};

export default ManagementTeam;
