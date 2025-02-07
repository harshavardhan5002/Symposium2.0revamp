import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Event1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50" />
        </div>

        <div className="relative z-10 py-24 px-6 md:px-12">
          <motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technical
              <span className="block bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
               Paper Presentation
              </span>
            </h1>

            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary-100">Event Details</h2>
          <div className="grid gap-6">
            {[
              { icon: <Calendar className="h-6 w-6" />, text: "March 17, 2025" },
              { icon: <Clock className="h-6 w-6" />, text: "Starts at 10:30 AM" },
              { icon: <MapPin className="h-6 w-6" />, text: "Lecture Hall Room No:204" },
              { icon: <Users className="h-6 w-6" />, text: "Teams of 2-4 members" },
              { icon: <Trophy className="h-6 w-6" />, text: "Cash Prizes" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <div className="text-primary-500">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-primary-100">Problem Statements</h2>
          <ul className="space-y-4">
            {[
              "Healthcare Innovation",
              "Smart City Solutions",
              "AI in Signal & Image Processing",
              "Electric Vehicles",
              "5G & Future Wireless Technologies"
            ].map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-sm mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-300">{problem}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-primary-100">Event Timeline</h2>
        <div className="space-y-6">
          {[
            { time: "10:00 AM", event: "Registration & Team Formation" },
            { time: "11:30 AM", event: "Presentation" },
            { time: "12.00 PM", event: "Judging" },

            { time: "1.00 PM", event: "Winners Announcements" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm flex items-center"
            >
              <div className="w-32 font-bold text-primary-400">{item.time}</div>
              <div className="text-gray-300">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Prizes */}

    </div>
  );
};

export default Event1;

