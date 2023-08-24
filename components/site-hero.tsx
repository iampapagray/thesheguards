export function SiteHero(){
  return (
    <section className="flex h-[95vh] flex-col">
      <div className="flex h-2/3 border-b">
        <div className="flex flex-col w-1/2 items-start justify-center border-r">
          a
        </div>
        <div className="flex flex-col w-1/2 items-start justify-center">
          b
        </div>
      </div>
      <div className="flex h-1/3 w-full">
        <div className="flex w-1/3 flex-col items-start jusitfy-center border-r">c</div>
        <div className="flex w-1/3  flex-col items-start jusitfy-center border-r">d</div>
        <div className="flex w-1/3  flex-col items-start jusitfy-center">e</div>
      </div>
    </section>
  )
}