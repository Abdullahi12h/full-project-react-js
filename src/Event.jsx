 function Events() {
  const events = [
    { id: 1, name: "Event 1", link: "https://example.com/event1" },
    { id: 2, name: "Event 2", link: "https://example.com/event2" },
  ];

  return (
    <section className="py-10 text-center bg-white">
      <h2 className="text-2xl font-bold mb-6">Events</h2>
      <div className="flex justify-center space-x-6">
        {events.map((event) => (
          <a 
            key={event.id} 
            href={event.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {event.name}
          </a>
        ))}
      </div>
    </section>
  )
}export default Events
