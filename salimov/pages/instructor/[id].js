import { instructors } from '@/src/components/Mock/Portfolio/instructors';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const InstructorDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    if (id) {
      const selected = instructors.find(
        (item) => item.id === parseInt(id)
      );
      setInstructor(selected);
    }
  }, [id]);

  if (!instructor) {
    return <p>Yüklənir...</p>;
  }

  return (
    <section className="instructor-details" style={{ padding: "40px" }}>
      <button
        className="back-button"
        onClick={() => window.location.href = '/'}
      >
        Geri
      </button>

      <h1>{instructor.name}</h1>
      <div>
        <p><strong>Rolu:</strong> {instructor.role}</p>
        <p><strong>Təcrübə:</strong> {instructor.experience}</p>
      </div>

      {instructor.type === 'image' && (
        <img
          src={instructor.image}
          alt={instructor.name}
          style={{ width: "300px", marginTop: "20px" }}
        />
      )}

      {instructor.type === 'video' && instructor.videoUrl && (
        <div className="videocontainer" style={{ marginTop: "20px" }}>
          <iframe
            className="youtube-video"
            width="560"
            height="315"
            src={instructor.videoUrl}
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
};

export default InstructorDetail;
