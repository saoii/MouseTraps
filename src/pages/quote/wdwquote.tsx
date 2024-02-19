import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  familyName: string;
  email: string;
  visitMonth: string;
  mumAdults: string;
  numKids: string;
  resortType: string;
  ticketType: string;
  parkHopper: string;
  waterSports: string;
  phPlus: string;
  budget: string;
  requests: string;
}

export const WdwQuote: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    familyName: '',
    email: '',
    visitMonth: '',
    mumAdults: '',
    numKids: '',
    resortType: '',
    ticketType: '',
    parkHopper: '',
    waterSports: '',
    phPlus: '',
    budget: '',
    requests: '',
  };
  return (
    <div>
      <h1>Get a quote</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className="input-group vertical">
          <label htmlFor="familyName">Family Name</label>
          <Field
            id="familyName"
            name="familyName"
            placeholder="The Mouse Family"
          />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email address" />
          <label htmlFor="visitMonth">Month to Visit</label>
          <Field as="select" name="visitMonth" id="visitMonth">
            <option value="">-- Month to visit --</option>
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
          </Field>
          <label htmlFor="mumAdults">Adults</label>
          <Field
            type="number"
            id="mumAdults"
            name="mumAdults"
            placeholder="# of Adults"
          />
          <label htmlFor="numKids">Kids</label>
          <Field
            type="number"
            id="numKids"
            name="numKids"
            placeholder="# of Kids (9 and under)"
          />
          <label htmlFor="resortType">Resort type</label>
          <Field as="select" name="resortType" id="resortType">
            <option value="">-- Select a resort type --</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Deluxe Villa">Deluxe Villa</option>
            <option value="Moderate">Moderate</option>
            <option value="Value">Value</option>
            <option value="Campground">Campground</option>
            <option value="Other Deluxe">Other Deluxe</option>
            <option value="Good Neighbor Hotel">Good Neighbor Hotel</option>
          </Field>
          <label htmlFor="ticketType">Ticket type</label>
          <Field as="select" name="ticketType">
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
          </Field>

          <label>
            <Field type="checkbox" name="parkHopper" value="parkHopper" />
            Park Hopper
          </label>
          <label>
            <Field type="checkbox" name="checked" value="phPlus" />
            Park Hopper Plus
          </label>
          <label>
            <Field type="checkbox" name="checked" value="phPlus" />
            Water Park and Sports
          </label>

          <label htmlFor="budget">Budget</label>
          <Field as="select" name="budget">
            <option value="">-- Select a budget size--</option>
            <option value="0">Cheap (I bring uncrustables)</option>
            <option value="2500">Frugal (Cosmic Ray's)</option>
            <option value="4000">Reasonable (Skipper Canteen)</option>
            <option value="8000">Extravagant (Be our Guest)</option>
            <option value="15000">Celebrity (Victoria and Alberts)</option>
          </Field>
          <label htmlFor="requests">Special Requests</label>
          <Field id="requests" name="requests" placeholder="Anything else?" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

/*         
export function WdwQuote() {
  return (
    <ErrorBoundary>
      <form className="input-group vertical">

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
      </div>
        <button type="submit" className="btn btn-primary">
          Get Quote
        </button>
      </form>
    </ErrorBoundary>
  );
}
export default WdwQuote;
 */
