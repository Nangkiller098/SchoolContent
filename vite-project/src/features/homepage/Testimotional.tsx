import { Typography, Avatar } from "@material-tailwind/react";
const Testimotional = () => {
  return (
    <>
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">Testimotional</a>
        </h1>
      </div>
      <div className=" bg-green-400 p-4">
        <Typography placeholder="" variant="h3" className="text-center py-4">
          WHAT STUDENTS
        </Typography>
        <Typography
          placeholder=""
          variant="lead"
          className="text-justify 2xl:px-96 m-4"
        >
          I’m extremely grateful for my parents’ decision on enrolling me in
          Sovannaphumi School. I couldn’t fully express my heartfelt gratitude
          towards all the teachers and staff during these 12 years of mine as an
          ambitious student. Sovannaphumi School doesn’t mess about when it
          comes to education and rules but as you can see, the strictness of the
          school has raised up countless outstanding students that others
          desperately strive for. The level of professionalism and hospitality
          is surreal which are the reasons why my parents and others have chosen
          this school.
        </Typography>
        <div className="flex items-center justify-center py-4">
          <Avatar
            placeholder=""
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            size="xxl"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Testimotional;
