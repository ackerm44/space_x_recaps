task :getLaunches => :environment do
  @resp = Faraday.get "https://api.spacexdata.com/v2/launches/all" do |req|
    req.options.timeout = 10
  end
  launches = JSON.parse(@resp.body)
  @launches = launches.map{|launch| Launch.find_or_initialize_by(flight_number: launch['flight_number'],
    year: launch['year'], launch_date: launch['launch_date_utc'], rocket_name: launch['rocket']['rocket_name'],
    launchpad_name: launch['launch_site']['site_name_long'], patch_image: launch['links']['mission_patch'],
    article_link: launch['links']['article_link'], video_link: launch['links']['video_link'],
    details: launch['details']
  )}

  @launches.each do |launch|
    if launch.rocket_name == "Falcon 1"
      launch.rocket = Rocket.find(1)
    elsif launch.rocket_name == "Falcon 9"
      launch.rocket = Rocket.find(2)
    elsif launch.rocket_name == "Falcon Heavy"
      launch.rocket = Rocket.find(3)
    end

    case launch.launchpad_name
    when "Cape Canaveral Air Force Station Space Launch Complex 40"
      launch.launchpad = Launchpad.find(1)
    when "SpaceX South Texas Launch Site"
      launch.launchpad = Launchpad.find(2)
    when "Vandenberg Air Force Base Space Launch Complex 4W"
      launch.launchpad = Launchpad.find(3)
    when "Cape Canaveral Air Force Station Space Launch Complex 13"
      launch.launchpad = Launchpad.find(4)
    when "Kwajalein Atoll Omelek Island"
      launch.launchpad = Launchpad.find(5)
    when "Kennedy Space Center Historic Launch Complex 39A"
      launch.launchpad = Launchpad.find(6)
    when "Vandenberg Air Force Base Space Launch Complex 3W"
      launch.launchpad = Launchpad.find(7)
    when "Vandenberg Air Force Base Space Launch Complex 4E"
      launch.launchpad = Launchpad.find(8)
    end

    if launch.valid?
      launch.save
    else
      puts launch.errors.full_messages
    end
  end

end
