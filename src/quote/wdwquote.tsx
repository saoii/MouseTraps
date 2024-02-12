function QuoteForm() {
  return (
    <form className="input-group vertical">
      <div className="sm:col-span-4">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="sm:col-span-4">
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="sm:col-span-4">
        <input
          type="text"
          placeholder="Your email"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mb-4">
        <input
          type="select"
          placeholder="month"
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected value="">
            -- Select a month to visit --
          </option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </input>
      </div>
      {/* 
      <div className="sm:col-span-2 sm:col-start-1">
          <label for="numAdults">Number of Adults</label>
          <div className="mt-2">
              <InputNumber placeholder="numAdults" className="input input-bordered w-full max-w-xs" @bind-Value="Model!.NumAdults" />
              <ValidationMessage For="@(() => Model!.NumAdults)" />
          </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
          <label for="numChildren">Number of Children (9 and under)</label>
          <div className="mt-2">
              <InputNumber placeholder="numChildren" className="input input-bordered w-full max-w-xs" @bind-Value="Model!.NumChildren" />
              <ValidationMessage For="@(() => Model!.NumChildren)" />
          </div>
      </div>

      <div className="mb-4">
          <input type='select' placeholder="resort" className="select select-bordered w-full max-w-xs">
              <option value="">-- Select a resort type --</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Deluxe Villa">Deluxe Villa</option>
              <option value="Moderate">Moderate</option>
              <option value="Value">Value</option>
              <option value="Campground">Campground</option>
              <option value="Other Deluxe">Other Deluxe</option>
              <option value="Good Neighbor Hotel">Good Neighbor Hotel</option>
          </InputSelect>
      </div>
      <div className="col-span-full">
          <InputSelect placeholder="ticket-type" className="select select-bordered w-full max-w-xs" @bind-Value="Model!.TicketType">
              <option value="">-- Select a ticket type --</option>
              <option value="1-Day">1-Day</option>
              <option value="2-Day">2-Day</option>
              <option value="3-Day">3-Day</option>
              <option value="4-Day">4-Day</option>
              <option value="5-Day">5-Day</option>
              <option value="6-Day">6-Day</option>
              <option value="7-Day">7-Day</option>
              <option value="8-Day">8-Day</option>
              <option value="9-Day">9-Day</option>
              <option value="10-Day">10-Day</option>
              <option value="11-Day">I Have Tickets/Annual Pass</option>
          </InputSelect>
      </div>
      <div className="mb-4">
          <InputCheckbox placeholder="park-hopper" className="form-check-input" @bind-Value="Model!.ParkHopper" />
          <label for="park-hopper">Park Hopper:</label>
      </div>
      <div className="mb-4">
          <InputCheckbox placeholder="water-park" className="form-check-input" @bind-Value="Model!.WaterPark" />
          <label for="water-park">
              Water Park and Sports Option:
          </label>
      </div>
      <div className="mb-4">
          <InputCheckbox placeholder="park-hopper-plus" className="form-check-input" @bind-Value="Model!.ParkHopperPlus" />
          <label for="park-hopper-plus">
              Park Hopper Plus Option:
          </label>
      </div>
      <div className="mb-4">
          <InputSelect placeholder="budget" className="select select-bordered w-full max-w-xs" @bind-Value="Model!.Budget">
              <option value="">-- Select a budget size--</option>
              <option value="0">Cheap (I bring uncrustables)</option>
              <option value="1000">Frugal (I eat quick service)</option>
              <option value="2500">Reasonable (maybe a sit down dinner)</option>
              <option value="4000">Extravagant (I do all the things)</option>
              <option value="10000">Celebrity (I have too much money)</option>
          </InputSelect>
      </div>
      <div className="mb-4">
          <InputTextArea className="textarea textarea-bordered w-full max-w-xs" @bind-Value="Model!.Notes" placeholder="Special Requests" />
      </div> */}
      <button type="submit" className="btn btn-primary">
        Get Quote
      </button>
    </form>
  );
}

export default QuoteForm;
