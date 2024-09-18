import React from 'react'

export default function LeaseAgreementViewer() {
  const documentContent = `
    THIS DEED OF LEASE made on the [DATE] day of [MONTH] 20[YEAR] at [LOCATION] between [LESSOR NAME] (hereinafter referred to as the Lessor) which term shall mean and include, wherever the context so requires, all his/her/their heirs, successors, administrators, executors, attorneys and assignees) of the One part AND [LESSEE NAME] (hereinafter referred to as the Lessee which term shall mean and include wherever the context so requires all his/her/their heirs, successors, administrators and assigns) of the Other Part represented by its Manager and holder of Power of Attorney dated [DATE] (hereinafter collectively referred to as 'the Parties' and individually as 'the Party') as follows:

    WHEREAS, the Lessor is/are the owners of the building bearing No. [BUILDING NUMBER] situated at [ADDRESS].

    WHEREAS, the Ground floor / First floor / Second floor measuring about [AREA] sq.ft. (Carpet area) in the said building more fully described in the schedule hereto and hereinafter called the 'Said Premises' was vacant and available for lease and whereas the Lessee being in need of accommodation approached and requested the Lessor / s to grant lease in its favour in respect of the 'Said Premises' and whereas both the parties have agreed to enter into this lease on the terms and conditions contained herein and to get lease in favour of the Lessee in respect of the 'Said Premises', it is now hereby agreed as follows:

    1. This lease for purpose of payment of rent and period of lease shall be deemed to have commenced from [DATE].

    2. The lease shall be for a period of [NUMBER] years certain from [DATE]. The Lessee shall however, have an option to continue the lease thereafter for a further period upto [NUMBER] years. The Lessee shall be at liberty to vacate the 'Said Premises' or part thereof at any time during the period of lease or giving [NUMBER] months' notice in writing.

    3. The Lessee shall pay to the Lessor/s in respect of the 'said premises' a monthly rental of Rs. [AMOUNT] (Rupees [AMOUNT IN WORDS] only) for the certain period of lease and a monthly rental of Rs. [AMOUNT] for the option period of lease payable within the fifth working day of each succeeding calendar month.

    4. The Lessee has paid to the Lessor / s a sum of Rs. [AMOUNT] only being [NUMBER] month's rent in respect of the 'said premises' as interest free refundable deposit to be adjusted towards the last [NUMBER] month's rent.

    5. The payment of all taxes, rates, cess and other levy including penalties if any, charged thereon in respect of the said premises such as Corporation / Municipal / Panchayat Tax, Urban Land Tax, etc.,

    ...

    19. The Lessee shall hand over possession of the 'said premises' to the Lessor on the expiry of the period of lease fixed herein or on the expiry of the period of option should the Lessee avail of the same, or on the expiry of the period of lease, in the same good condition as on the date of occupation subject to natural wear and tear due to ordinary use and lapse of time.

    IN WITNESS WHEREOF the parties hereto have set their hands hereunto in full agreement of the terms and conditions set forth herein above the day and year first hereinabove mentioned.

    WITNESSES:                                           LESSOR/S

    (1)

    (2)                                                  LESSEE

    * This para is applicable only while accepting a premises on fresh lease. Please delete the immediately preceding para. pertaining to renewal of lease.

    ** This para is applicable only while renewal of lease. Please delete the immediately preceding para. pertaining to fresh lease.
  `

  return (
    <div className="h-screen flex flex-col max-w-md mx-auto   bg-white">
      <div className="flex-grow overflow-auto p-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
          <div className="p-6">
            <h1 className="text-xl font-bold mb-4 text-center">Pledge Deed</h1>
            <div className="whitespace-pre-wrap font-serif text-sm">
              {documentContent}
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-4 px-4 text  items-center justify-between">
        <button className=" w-full  bg-blue-500 text-white py-3 items-center justify-between rounded-md">
          Sign Agreement
        </button>
      </div>
    </div>
  )
}