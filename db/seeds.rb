rockets = Rocket.create(
  [
    {
      name: "Falcon 1",
      cost_per_launch: 6700000,
      height: 73,
      diameter: 5.5,
      mass: 66460,
      number_of_engines: 1,
      engine_type: "Merlin",
      description: "The Falcon 1 was an expendable launch system privately developed
      and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became
      the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
    },
    {
      name: "Falcon 9",
      cost_per_launch: 61200000,
      height: 229.6,
      diameter: 12,
      mass: 1207920,
      number_of_engines: 9,
      engine_type: "Merlin",
      description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX
      for the reliable and safe transport of satellites and the Dragon spacecraft into orbit."
    },
    {
      name: "Falcon Heavy",
      cost_per_launch: 90000000,
      height: 229.6,
      diameter: 39.9,
      mass: 3125735,
      number_of_engines: 27,
      engine_type: "Merlin",
      description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass
      equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy
      can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy,
      at one-third the cost."
    }
  ]
)

launchpads = Launchpad.create(
  [
    {
      name: "Cape Canaveral Air Force Station Space Launch Complex 40",
      status: "Active",
      location_name: "Cape Canaveral",
      location_region: "Florida",
      latitude: 28.5618571,
      longitude: -80.577366,
      details: "SpaceX primary Falcon 9 launch pad, where all east coast Falcon 9s
      launched prior to the AMOS-6 anomaly. Initially used to launch Titan rockets
      for Lockheed Martin. Back online since CRS-13 on 2017-12-15."
    },
    {
      name: "SpaceX South Texas Launch Site",
      status: "Under Construction",
      location_name: "Boca Chica Village",
      location_region: "Texas",
      latitude: 25.9972641,
      longitude: -97.1560845,
      details: "SpaceX new launch site currently under construction to help keep
      up with the Falcon 9 and Heavy manifests. Expected to be completed in late 2018.
      Initially will be limited to 12 flights per year, and only GTO launches."
    },
    {
      name: "Vandenberg Air Force Base Space Launch Complex 4W",
      status: "Active",
      location_name: "Vandenberg Air Force Base",
      location_region: "California",
      latitude: 34.6332043,
      longitude: -120.6156234,
      details: "SpaceX west coast landing pad, has not yet been used. Expected to
      first be used during the Formosat-5 launch."
    },
    {
      name: "Cape Canaveral Air Force Station Space Launch Complex 13",
      status: "Active",
      location_name: "Cape Canaveral",
      location_region: "Florida",
      latitude: 28.4857244,
      longitude: -80.5449222,
      details: "SpaceX east coast landing pad, where the historic first landing
      occurred. Originally used for early Atlas missiles and rockets from Lockheed Martin.
      Currently being expanded to add two smaller pads for Falcon Heavy RTLS missions."
    },
    {
      name: "Kwajalein Atoll Omelek Island",
      status: "Retired",
      location_name: "Omelek Island",
      location_region: "Marshall Islands",
      latitude: 9.0477206,
      longitude: 167.7431292,
      details: "SpaceX original launch site, where all of the Falcon 1 launches occured.
      Abandoned as SpaceX decided against upgrading the pad to support Falcon 9."
    },
    {
      name: "Kennedy Space Center Historic Launch Complex 39A",
      status: "Active",
      location_name: "Cape Canaveral",
      location_region: "Florida",
      latitude: 28.6080585,
      longitude: -80.6039558,
      details: "NASA historic launch pad that launched most of the Saturn V and
      Space Shuttle missions. Initially for Falcon Heavy launches, it is now launching
      all of SpaceX east coast missions due to the damage from the AMOS-6 anomaly.
      After SLC-40 repairs are complete, it will be upgraded to support Falcon Heavy,
      a process which will take about two months. In the future it will launch commercial
      crew missions and the Interplanetary Transport System."
    },
    {
      name: "Vandenberg Air Force Base Space Launch Complex 3W",
      status: "Retired",
      location_name: "Vandenberg Air Force Base",
      location_region: "California",
      latitude: 34.6440904,
      longitude: -120.5931438,
      details: "SpaceX original west coast launch pad for Falcon 1. Performed a static
      fire but was never used for a launch and abandoned due to scheduling conflicts."
    },
    {
      name: "Vandenberg Air Force Base Space Launch Complex 4E",
      status: "Active",
      location_name: "Vandenberg Air Force Base",
      location_region: "California",
      latitude: 34.632093,
      longitude: -120.610829,
      details: "SpaceX primary west coast launch pad for polar orbits and sun synchronous
      orbits, primarily used for Iridium. Also intended to be capable of launching Falcon Heavy."
    }
  ]
)
