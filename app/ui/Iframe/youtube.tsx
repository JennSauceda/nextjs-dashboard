
import { lusitana } from '@/app/ui/fonts';


export function Youtube({
  title,
  value
}: {
  title: string;
  value: number | string;
}) {
  

  return (
    <div className="rounded-xl p-2 shadow-sm bg-black">
      <div className="flex p-4">
    
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src={`https://www.youtube.com/embed/${value}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </p>
    </div>
  );
}
