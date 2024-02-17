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
      <div className="w-full h-full lg:flex justify-center pt-4 gap-10 ">
        <div className="pb-4 p-4">
          <Card className="w-full h-full lg:w-96 ">
            <Typography
              variant="h5"
              color="blue-gray"
              className=" items-center text-center pt-4"
            >
              Learning Resource
            </Typography>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    variant="square"
                    size="xxl"
                    className="w-96"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
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
              <ListItem className="">
                <ListItemPrefix>
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    variant="square"
                    size="xxl"
                    className="w-96"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
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
              <ListItem className="">
                <ListItemPrefix>
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    variant="square"
                    size="xxl"
                    className="w-96"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
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
              <Button className=" bg-green-600">Read More</Button>
            </div>
          </Card>
        </div>
        <div className="pb-4">
          <Card className="w-full h-full lg:w-96 ">
            <Typography
              variant="h5"
              color="blue-gray"
              className=" items-center text-center pt-4"
            >
              Video
            </Typography>
            <List>
              <ListItem>
                <video className="h-full w-full rounded-none" controls>
                  <source
                    src="https://docs.material-tailwind.com/demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </ListItem>
              <ListItem>
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
                <Button className=" bg-green-600 pb-3">Read More</Button>
              </div>
            </List>
          </Card>
        </div>
      </div>
    </>
  );
}
