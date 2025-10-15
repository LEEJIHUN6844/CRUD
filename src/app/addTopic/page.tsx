export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 p-4"
        placeholder="Topic Title"
      />
      <textarea
        className="border border-slate-500 p-4 h-32"
        placeholder="Topic Description"
      />
      <button className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md">
        Add Topic
      </button>
    </form>
  );
}
