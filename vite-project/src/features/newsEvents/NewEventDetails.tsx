/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../../app/models/Content";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const NewEventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<Content>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Content/${id}`)
      .then((res) => setContent(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) return <h3>Loading...</h3>;
  if (!content) return <h3>Contnet Not Found</h3>;
  return (
    <>
      <div>
        <img
          className="h-96 w-full object-cover object-center"
          src="../banners.svg"
          alt="nature image"
        />
      </div>
      <div className="2xl:mx-96 text-justify">
        <Card placeholder={undefined} className="w-full mt-10 justify-center">
          <CardHeader
            placeholder={undefined}
            floated={false}
            shadow={false}
            color="transparent"
          >
            <Typography
              variant="h5"
              color="blue-gray"
              placeholder={undefined}
              className="w-full"
            >
              សាកល​វិទ្យា​ល័យ​បៀល​ប្រា​យ រាជធានី​ភ្នំពេញ
              បាន​រៀបចំ​កម្មវិធី​មួយ​ដើម្បី​ជួប​ស្វា​គមន៍ ចំពោះ​និស្សិត​ថ្មី
              ក្នុង​ថ្ងៃ​បើក​បវេសនកាល លើក​ទី​៣ ចូល​រៀន នៅ​ថ្ងៃទី​២៦ ខែ​វិច្ឆិកា
              ឆ្នាំ​២០១៨​
            </Typography>
          </CardHeader>
          <CardBody placeholder={undefined}>
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="gray"
              className="mt-3 font-normal"
            >
              ថ្ងៃ​ចន្ទ ៤ រោច ខែ​កត្តិក ឆ្នាំច សំរឹ​ទ្ធិ​ស័ក ព​.​ស​.
              ២៥៦២​ត្រូវ​នឹង​ថ្ងៃទី​២៦ ខែ​វិច្ឆិកា ឆ្នាំ​២០១៨
              សាកល​វិទ្យា​ល័យ​បៀល​ប្រា​យ រាជធានី​ភ្នំពេញ
              បាន​រៀបចំ​កម្មវិធី​មួយ​ដើម្បី​ជួប​ស្វា​គមន៍ ចំពោះ​និស្សិត​ថ្មី
              ក្នុង​ថ្ងៃ​បើក​បវេសនកាល លើក​ទី​៣ ចូល​រៀន នៅ​ថ្ងៃទី​២៦ ខែ​វិច្ឆិកា
              ឆ្នាំ​២០១៨​។​ ​លោក សាកលវិទ្យាធិការ​រង​ជាន់
              ទទួលបន្ទុក​កិច្ចការ​សិក្សា សាកល​វិទ្យា​ល័យ
              បាន​ចូលរួម​កម្មវិធី​បើក​បវេសនកាល​ថ្មី ក្នុង​ថ្ងៃ​នេះ ដោយ​ក្នុង​នោះ
              លោក​មាន​ជា​មតិ​ស្វា​គមន៍ យ៉ាង​កក់ក្តៅ​ចំពោះ​វត្តមានរបស់​ប្អូនៗ
              ដែល​ជា​និស្សិត​ថ្មី​ទាំងអស់ដែល​មាន​វត្តមាន​នៅពេល​នោះ
              ហើយដែល​បាន​សម្រេចចិត្ត​ជ្រើសរើសយក សាកល​វិទ្យា​ល័យ​បៀល​ប្រា​យ
              ក្នុង​ការចូលរួម​ប​ណ្តុះ​បណ្តាល​ចំណេះ​ដឹង និង​ជំនាញ​។​
            </Typography>
          </CardBody>
          <CardFooter
            placeholder={undefined}
            className="flex items-center justify-between"
          >
            <div className="w-full">
              <img
                src="https://www.bbu.edu.kh/photos/article/2024-02-08 10.05.49.jpg"
                alt="ui/ux review check"
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default NewEventDetails;
