import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Learning() {
  return (
    <>
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">Learning & Resource</a>
        </h1>
      </div>
      <div className="w-full h-full lg:flex justify-center pt-4 gap-10 ">
        <div className="pb-4 p-4">
          <Card placeholder="" className="w-full h-full lg:w-96 ">
            <Typography
              placeholder=""
              variant="h5"
              color="blue-gray"
              className=" items-center text-center pt-4"
            >
              Learning Resource
            </Typography>
            <List placeholder="">
              <ListItem placeholder="">
                <ListItemPrefix placeholder="">
                  <Avatar
                    placeholder=""
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    variant="square"
                    size="xxl"
                    className="w-96"
                  />
                </ListItemPrefix>
                <div>
                  <Typography placeholder="" variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
                    placeholder=""
                    variant="small"
                    color="gray"
                    className="font-normal text-justify"
                  >
                    Our graduates are following their dreams Our graduates are
                    following their dream Our graduates are Our graduates are
                    following their dreams Our ....
                  </Typography>
                </div>
              </ListItem>
              <ListItem placeholder="" className="">
                <ListItemPrefix placeholder="">
                  <Avatar
                    placeholder=""
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    variant="square"
                    size="xxl"
                    className="w-96"
                  />
                </ListItemPrefix>
                <div>
                  <Typography placeholder="" variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
                    placeholder=""
                    variant="small"
                    color="gray"
                    className="font-normal text-justify"
                  >
                    Our graduates are following their dreams Our graduates are
                    following their dream Our graduates are Our graduates are
                    following their dreams Our ....
                  </Typography>
                </div>
              </ListItem>
              <ListItem placeholder="" className="">
                <ListItemPrefix placeholder="">
                  <Avatar
                    placeholder=""
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    variant="square"
                    size="xxl"
                    className="w-96"
                  />
                </ListItemPrefix>
                <div>
                  <Typography placeholder="" variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
                    placeholder=""
                    variant="small"
                    color="gray"
                    className="font-normal text-justify"
                  >
                    Our graduates are following their dreams Our graduates are
                    following their dream Our graduates are Our graduates are
                    following their dreams Our ....
                  </Typography>
                </div>
              </ListItem>
            </List>
            <div className=" items-center text-center pb-3">
              <Button placeholder="" className=" bg-green-600">
                Read More
              </Button>
            </div>
          </Card>
        </div>
        <div className="pb-4">
          <Card placeholder="" className="w-full h-full lg:w-96 ">
            <Typography
              placeholder=""
              variant="h5"
              color="blue-gray"
              className=" items-center text-center pt-4"
            >
              Video
            </Typography>
            <List placeholder="">
              <ListItem placeholder="">
                <video className="h-full w-full rounded-none" controls>
                  <source
                    src="https://docs.material-tailwind.com/demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </ListItem>
              <ListItem placeholder="">
                {" "}
                <video className="h-full w-full rounded-lg" controls>
                  <source
                    src="https://docs.material-tailwind.com/demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </ListItem>
              <div className=" items-center text-center">
                <Button placeholder="" className=" bg-green-600 pb-3">
                  Read More
                </Button>
              </div>
            </List>
          </Card>
        </div>
      </div>
    </>
  );
}
