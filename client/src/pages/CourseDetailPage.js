import { useParams } from "react-router-dom";

const CourseDetailPage = () => {
  const params = useParams();

  return <div>Course {params.id}</div>;
};

export default CourseDetailPage;
