import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Slider from "react-slick";
export function NewsEvents() {
  const data = [
    {
      id: "1",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "6",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "7",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "8",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "9",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "10",
      title:
        "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ២០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
      description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង�...",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container lg:pt-0 lg:p-[30vh] lg:pb-2">
      <Slider {...settings}>
        {data.map((d) => (
          <Card key={d.id} className="h-full w-full">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="rounded-sm "
            >
              <img
                src={d.imageUrl}
                alt="ui/ux review check"
                className="w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 w-full h-full "
              >
                {d.title}
              </Typography>
              <Typography>{d.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className=" bg-green-600">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </Slider>
    </div>
  );
}
